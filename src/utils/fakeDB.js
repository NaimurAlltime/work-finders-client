// use local storage to manage cart data
const addToDb = id => {
    let applyJob = getApplyJob();
    // add quantity
    const quantity = applyJob[id];
    if (!quantity) {
        applyJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        applyJob[id] = newQuantity;
    }
    localStorage.setItem('apply-job', JSON.stringify(applyJob));
}

const removeFromDb = id => {
    const applyJob = getApplyJob();
    if (id in applyJob) {
        delete applyJob[id];
        localStorage.setItem('apply-job', JSON.stringify(applyJob));
    }
}

const getApplyJob = () => {
    let applyJob = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('apply-job');
    if (storedCart) {
        applyJob = JSON.parse(storedCart);
    }
    return applyJob;
}

const deleteApplyJob = () => {
    localStorage.removeItem('apply-job');
}

export {
    addToDb,
    removeFromDb,
    getApplyJob,
    deleteApplyJob
};

