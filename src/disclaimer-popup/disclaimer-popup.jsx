import React, {Component} from "react";
import logo_horizontal from "../assets/cgw_logo+text+horizontal.png";
import "./disclaimer-popup.css";

class DisclaimerPopUp extends Component {
  render() {
    return (
      <div className="popup-container">
        <img className="logo" src={logo_horizontal} alt="logo" />
        <h4>DISCLAIMER</h4>
        <h6>
          By entering into this website, you acknowledge and confirm that you
          are an accredited investor, expert investor or institutional investor
          as prescribed in Section 4A of the Securities and Futures Act (Chapter
          289)
        </h6>
        <h6>Accredited investor means:</h6>
        <p>an individual </p>
        <p>
          whose net personal assets exceed in value $2 million (or its
          equivalent in a foreign currency) or such other amount as the
          Authority may prescribe in place of the first amount; or
        </p>
        <p>
          whose income in the preceding 12 months is not less than $300,000 (or
          its equivalent in a foreign currency) or such other amount as the
          Monetary Authority of Singapore ( the “Authority”) may prescribe in
          place of the first amount;
        </p>
        <p>
          a corporation with net assets exceeding $10 million in value (or its
          equivalent in a foreign currency) or such other amount as the
          Authority may prescribe, in place of the first amount, as determined
          by
        </p>
        <p>the most recent audited balance-sheet of the corporation; or </p>
        <p>
          where the corporation is not required to prepare audited accounts
          regularly, a balance-sheet of the corporation certified by the
          corporation as giving a true and fair view of the state of affairs of
          the corporation as of the date of the balance-sheet, which date shall
          be within the preceding 12 months;
        </p>
        <p>
          the trustee of such trust as the Authority may prescribe, when acting
          in that capacity; or
        </p>
        <p>such other person as the Authority may prescribe;</p>
        <h6>Expert Investor: </h6>
        <p>
          a person whose business involves the acquisition and disposal, or the
          holding, of capital markets products, whether as principal or agent;
        </p>
        <p>
          the trustee of such trust as the Authority may prescribe, when acting
          in that capacity; or
        </p>
        <p> such other person as the Authority may prescribe;</p>
        <h6>Institutional investor means:</h6>
        <p>a bank that is licensed under the Banking Act (Cap. 19); </p>
        <p>
          a merchant bank that is approved as a financial institution under
          section 28 of the Monetary Authority of Singapore Act (Cap. 186);
        </p>
        <p>
          a finance company that is licensed under the Finance Companies Act
          (Cap. 108);
        </p>
        <p>
          a company or co-operative society that is licensed under the Insurance
          Act (Cap. 142) to carry on insurance business in Singapore;
        </p>
        <p>
          a company licensed under the Trust Companies Act 2005 (Act 11 of
          2005);
        </p>
        <p>the Government; </p>
        <p>
          a statutory body established under any Act; a pension fund or
          collective investment scheme;
        </p>
        <p>
          the holder of a capital markets services licence for dealing in
          securities;
        </p>
        <p>fund management; </p>
        <p>providing custodial services for securities; </p>
        <p>real estate investment trust management; </p>
        <p>securities financing; </p>
        <p>or trading in futures contracts; </p>
        <p>
          a person (other than an individual) who carries on the business of
          dealing in bonds with accredited investors or expert investors;
        </p>
        <p>
          the trustee of such trust as the Authority may prescribe, when acting
          in that capacity; or
        </p>
        <p>
          such other person as the Authority may prescribe.
          <h6> Terms: </h6>
          Please read the terms below before proceeding. The terms explain
          certain restrictions imposed by law on the distribution of this
          information. In using this website, you agree to the below terms. If
          you do not agree with them you should exit this website now.
        </p>
        <button className="disclaimer-btn" onClick={this.props.accepted}>
          Accept
        </button>
        <button className="disclaimer-btn" onClick={this.props.redirected}>
          Disagree
        </button>
      </div>
    );
  }
}

export default DisclaimerPopUp;
