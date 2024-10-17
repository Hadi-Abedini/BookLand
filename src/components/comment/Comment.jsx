import React, { useEffect, useState } from "react";
import Rating from "../rating/Rating";
import SearchInput from "../SearchBox/SearchInput";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import addNewComment from "../../Api/AddNewComment";
import toast from "react-hot-toast";
import getAllComment from "../../Api/GetAllComment";
import { Spinner } from "flowbite-react";
import formatDateString from "../../utils/FormatDate";
import CommentsSection from "./commentSection";

const notifySuccess = () => toast.success(".نظر شما با موفقیت ثبت شد");
const notifyUnsuccess = () => toast.error(".ثبت نظر با مشکل مواجه شد");

function Comment({ id }) {

  const queryClient = useQueryClient();

  const [rating, setRating] = useState(0);

  const [formValues, setFormValues] = useState({
    autor: "",
    body: "",
    title: "",
    product_id: id,
    rating: 0,
  });

  const resetForm = () => {
    setFormValues({
      autor: "",
      body: "",
      title: "",
      product_id: id,
      rating: 0,
    });
    setRating(0);
  };

  const { mutate } = useMutation({
    mutationFn: async (formData) => {
      try {
        await addNewComment(formData);
        queryClient.invalidateQueries({
          queryKey: ['product'],
        });
      } catch (error) {
        console.error("Error adding new comment", error);
        throw error;
      }
    },
    onSuccess: () => {
      notifySuccess();
      refetch();
      resetForm();
    },
    onError: (error) => {
      console.error("Error adding new comment", error);
      notifyUnsuccess();
    },
  });

  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      rating: rating,
    }));
  }, [rating]);

  const handleInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0) {
      mutate(formValues);
    }
  };
  const {
    isLoading,
    isSuccess,
    refetch,
    data: comments,
  } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => getAllComment(id),
  });

  return (
    <div className="w-full flex gap-5">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 h-fit flex flex-col gap-3 text-xs p-5 rounded-lg border-[3px] border-[#429F4B]"
        action=""
      >
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row items-center gap-3">
            <SearchInput
              id={"autor"}
              placeholder={"نام نویسنده"}
              value={formValues.autor}
              onChange={(e) => handleInputChange("autor", e.target.value)}
            />
            <Rating totalStars={5} rating={rating} setRating={setRating} />
          </div>
          <div className="flex flex-row items-center gap-3">
            <SearchInput
              id={"title"}
              placeholder={"عنوان"}
              value={formValues.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <textarea
              className="w-full resize-none text-right font-[sans-regular] bg-[#E8F4E8] rounded-lg p-[6px] border-0 text-[13px] focus:border-0 focus:ring-0 placeholder:text-black"
              name="body"
              placeholder={"نظر"}
              value={formValues.body}
              rows="5"
              onChange={(e) => handleInputChange("body", e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-fit px-7 py-2 rounded-lg text-white bg-[#429F4B]"
        >
          ثبت
        </button>
      </form>
      {isSuccess && <CommentsSection comments={comments.data.data.comments} />}
    </div>
  );
}

export default Comment;
