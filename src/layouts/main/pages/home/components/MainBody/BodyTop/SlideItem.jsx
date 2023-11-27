import React from "react";
import ItemButtons from "./ItemButtons";
import "./_SlideItem.scss";

export default function SlideItem() {
  return (
    <>
      <div className="item">
        <div className="container">
          <div className="row blurb">
            <div className="col-md-8 col-sm-12 blurb-content">
              <span className="title">Action, Advanture, Fantasy</span>
              <header>
                <h1>Up in smoke: The remake</h1>
              </header>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram, anteposuerit litterarum formas
                humanitatis per seacula quarta decima et quinta decima.
              </p>
              <ItemButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
