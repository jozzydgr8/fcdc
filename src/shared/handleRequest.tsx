export  const handleRequest = (message: string) => {
    const whatsappURL = `https://wa.me/2348140085382?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };