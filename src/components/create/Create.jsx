import React from "react";
import "./create.css";
// import { IoIosAddCircleOutline } from "react-icons/io";
import TagInput from "./TagInput";

export const Create = () => {
  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img ">
            <img
              src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="girl"
              class="image-preview"
            />
          </div>
          <form>
            <div className="inputfile flexCenter">
              <input type="file" accept="image/*" alt="img" />
            </div>

            <input type="text" placeholder="Title" />

            <textarea name="" id="" cols="30" rows="10"></textarea>

            <button className="button">Create Post</button>
          </form>
        </div>
      </section>
      <div className="Tag">
        <h2>Enter your Tags ...</h2>
        <TagInput />
      </div>
    </>
  );
};
