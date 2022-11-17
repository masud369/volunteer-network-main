import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
const Addevents = () => {
  const [imgUrl,setImgUrl] = useState(null)

    const handelUploadImg = e=>{
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '53433d21376253ff0f620ce96344c01d');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImgUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
console.log(imgUrl)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const imageDetails = {name:data.name,imageUrl:imgUrl}
    fetch('http://localhost:5055/addevent',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(imageDetails)
    })
    console.log(imageDetails)
  };
  
  return (
    <div>
        <h1>Add Your Event</h1>
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="test" {...register("name")} /> <br /><br />
        <input  type="file"  onChange={handelUploadImg}/>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Addevents;
