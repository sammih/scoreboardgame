import React from "react";

const Header = (props) => {
  return (
    <div className="bg-purple-500 text-white font-semibold flex items-center justify-between px-8 py-6">
      <div>
        <h2 className="uppercase">{props.title}</h2>
      </div>
      <div>
        <div className="uppercase space-x-2"><span>Players</span>: <span className="font-normal bg-slate-100 text-gray-700 px-2 py-1 rounded-full">{props.totalPlayers}</span></div>
      </div>
    </div>
  )
}

export default Header