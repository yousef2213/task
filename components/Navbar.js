import React from "react";
import { connect } from "react-redux";
const Navbar = ({ amount }) => {
  return (
    <nav>
      <div className="nav-center">
        <h3>Task</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 20 20"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return { amount: state.amount };
};
export default connect(mapStateToProps)(Navbar);
