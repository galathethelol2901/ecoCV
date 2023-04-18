useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
    };
}, []);

const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
        "vous pouvez recharger la page et gagner du temps car je suis un dev sympas et que vous aller m embaucher";
    e.returnValue = message;
    return message;
};