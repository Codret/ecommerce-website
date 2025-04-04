export const showToast = (operation, id) => {
    let toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add") {
        toast.textContent = `Product with Id ${id} has been Added`
    }else{
        toast.textContent = `Product With Id ${id} has Been Deleted`
    }
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}
