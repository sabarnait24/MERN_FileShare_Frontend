import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  EmailIcon,
  EmailShareButton,
  TwitterShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  InstapaperIcon,
  InstapaperShareButton,
} from "react-share";

function Share(props) {
  console.log(props.dwnldLink);
  return (
    <div className="flex justify-center items-center">
      <FacebookShareButton
        url={props.dwnldLink}
        quote="File Sharing App"
        hashtag="#programing joke"
      >
        <FacebookIcon logoFillColor="white" />
      </FacebookShareButton>
      <WhatsappShareButton
        url={props.dwnldLink}
        quote="File Sharing App"
        hashtag="#programing joke"
        // style={style}
      >
        <WhatsappIcon logoFillColor="white" />
      </WhatsappShareButton>
      <EmailShareButton
        url={props.dwnldLink}
        quote="File Sharing App"
        hashtag="#programing joke"
      >
        <EmailIcon logoFillColor="white" />
      </EmailShareButton>
      <TwitterShareButton
        url={props.dwnldLink}
        quote="File Sharing App"
        hashtag="#programing joke"
      >
        <TwitterIcon logoFillColor="white" />
      </TwitterShareButton>
      <InstapaperShareButton
        url={props.dwnldLink}
        quote="File Sharing App"
        hashtag="#programing joke"
      >
        <InstapaperIcon logoFillColor="white" />
      </InstapaperShareButton>
      <TelegramShareButton
        url={props.dwnldLink}
        quote="File Sharing App"
        hashtag="#programing joke"
      >
        <TelegramIcon logoFillColor="white" />
      </TelegramShareButton>
    </div>
  );
}

export default Share;
