const isTokenExpired = (exp) => {
    const currentTime = Math.floor(Date.now() / 1000);

    if (!exp) {
        return true;
    }

    return exp < currentTime;
};

export default isTokenExpired;