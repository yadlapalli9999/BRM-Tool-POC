import React from "react";
import "./MembersList.css";
const MembersList = (props) => {
  const members = props.members;
  console.log(members);

  return (
    <>
      <div class="card membersStatus w-100">
        <div class="card-header d-flex justify-content-center sticky-top ">
          Members
        </div>
        <div class="card-body d-flex flex-column justify-content-start align-items-center gap-2">
          {members.length > 0 ? (
            members.map((item, index) => (
              <div key={index} className="memberName">
                {item.name}
              </div>
            ))
          ) : (
            <div className="memberName">No Members</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MembersList;
