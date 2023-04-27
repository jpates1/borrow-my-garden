import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 

const Login = ({navigate}) => {
    return (
        <h3>Login/Signup success</h3>
    )
}
// const Login = (props) => (
//  <tr>
//    <td>{props.record.name}</td>
//    <td>{props.record.position}</td>
//    <td>{props.record.level}</td>
//    <td>
//      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
//      <button className="btn btn-link"
//        onClick={() => {
//          props.deleteRecord(props.record._id);
//        }}
//      >
//        Delete
//      </button>
//    </td>
//  </tr>
// );
 
// export default function Login() {
//  const [records, setRecords] = useState([]);
//  // This following section will display the table with the records of individuals.
//  return (
//    <div>
//      <h3>Login Page</h3>
//      {/* <table className="table table-striped" style={{ marginTop: 20 }}>
//        <thead>
//          <tr>
//            <th>Name</th>
//            <th>Position</th>
//            <th>Level</th>
//            <th>Action</th>
//          </tr>
//        </thead>
//        <tbody>{recordList()}</tbody>
//      </table> */}
//    </div>
//  );
// }

module.exports = Login;