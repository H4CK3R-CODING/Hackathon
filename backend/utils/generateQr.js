import QRCode from "qrcode";

const generateQR = async (text) => {
  try {
    const qrUrl =  await QRCode.toDataURL(text);
    return qrUrl;
  } catch (err) {
    console.error(err);
  }
};

export default generateQR;