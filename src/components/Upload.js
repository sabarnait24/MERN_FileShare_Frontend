import React, { useCallback, useState } from "react";
import { Button } from "react-daisyui";
import filePhoto from "./filePhoto.png"
import { useDropzone } from "react-dropzone";
import Share from "./Share";
import Spinner from "./Spinner";

function Upload() {
  const [file, setfile] = useState("No File Chosen");
  const [btntxt, setbtntxt] = useState("Upload File");
  const [dwnldLink, setDwnldLink] = useState("");
  const [shareplace, setShareplace] = useState("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    if (!acceptedFiles) return {};
    setLoading(true);
    setfile(acceptedFiles[0].name);
    setbtntxt("Get Download Link");
    console.log(acceptedFiles);
    let formdata = new FormData();
    
    formdata.append("Myfile", acceptedFiles[0]);
    fetch("https://fileshare-api.onrender.com/api/upload", {
      method: "POST",
      body: formdata,
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // console.log(data);
        setDwnldLink(data.urlLink);
        setLoading(false);
      })
      .catch((error) => console.log(error));

    // console.log(formdata);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
   
  });
 
  const ShareClick = () => {
    setShareplace(<Share dwnldLink={dwnldLink}></Share>);
  };
  return (
    <div className=" bg-white flex justify-center items-center h-screen ">
      <div className="card w-96 ">
        <figure className="py-5 pt-10">
          <img
            src={filePhoto}
            style={{height:"230px",width:"300px"}}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">Upload and Share</h2>
          <p className="my-2">Upload File in .jpg/.jpeg/.pdf/.txt Format </p>
          <p>{file}</p>
          {loading === true ? (
            <Spinner />
          ) : (
            <div className="my-2">
              <div className="card-actions">
                {file === "No File Chosen" ? (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Button className="btn btn-primary w-96 my-2">
                      {btntxt}
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {file!=="No File Chosen" && dwnldLink!=="" ? (
                <div>
                <a
                  href={dwnldLink}
                  target="_blank"
                  rel="noreferrer"
                  className="link link-secondary my-2"
                >
                  Click here to Download
                </a>
                 <Button
                 className="btn btn-primary w-96 my-2"
                 onClick={ShareClick}
               >
                 Share
               </Button>
               </div>
              ) : (
               ""
              )}
             
            </div>
          )}
        </div>
        <p>{shareplace}</p>
      </div>
    </div>
  );
}

export default Upload;
