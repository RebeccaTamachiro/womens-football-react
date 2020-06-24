import React from "react";
import "./Scores.css";

export default function Scores() {
  return (
    <div className="Scores">
      <div className="row mx-2">
        <div className="card col mx-2 my-2">
          <div className="row">
            <div className="badgeWrapper col-2 px-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Emblema_Benfica_1930_%28Sem_fundo%29.png/180px-Emblema_Benfica_1930_%28Sem_fundo%29.png"
                className="card-image"
                alt="Benfica badge"
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title mb-2">Liga Portugal</h5>
                <p className="card-text mb-0">
                  SL Benfica <span className="goals">2</span>x
                  <span className="goals">2</span> FC Porto
                </p>
                <p className="card-text mx-0">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="badgeWrapper col-2 px-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Emblema_Benfica_1930_%28Sem_fundo%29.png/180px-Emblema_Benfica_1930_%28Sem_fundo%29.png"
                className="card-image"
                alt="Benfica badge"
              />{" "}
            </div>
          </div>
        </div>
        <div className="card col mx-2 my-2">
          <div className="row">
            <div className="badgeWrapper col-2 px-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Emblema_Benfica_1930_%28Sem_fundo%29.png/180px-Emblema_Benfica_1930_%28Sem_fundo%29.png"
                className="card-image"
                alt="Benfica badge"
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title mb-2">Liga Portugal</h5>
                <p className="card-text mb-0">
                  SL Benfica <span className="goals">2</span>x
                  <span className="goals">2</span> FC Porto
                </p>
                <p className="card-text mx-0">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="badgeWrapper col-2 px-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Emblema_Benfica_1930_%28Sem_fundo%29.png/180px-Emblema_Benfica_1930_%28Sem_fundo%29.png"
                className="card-image"
                alt="Benfica badge"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
