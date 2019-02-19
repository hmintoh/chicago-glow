import React, {Component} from "react";
import logo_horizontal from "../../assets/cgw_logo+text+horizontal.png";
import "./disclaimer-popup.css";

class DisclaimerPopUp extends Component {
  render() {
    return (
      <div className="popup-container">
        <div className="disclaimer-title">
          <img className="logo" src={logo_horizontal} alt="logo" />
          <h4>DISCLAIMER</h4>
        </div>
        <h6>
          By entering into this website, you acknowledge and confirm that you
          are an accredited investor or institutional investor as prescribed in
          Section 4A of the Securities and Futures Act (Chapter 289)
        </h6>
        <h6>Accredited investor means:</h6>
        <p>(i) an individual</p>
        <p>
          a) whose net personal assets exceed in value the minimum amount of $2
          million (or its equivalent in a foreign currency) or such other amount
          as the Authority may prescribe in place of the first amount, and in
          determining whether an individual’s net personal assets exceeds the
          minimum amount, the estimated fair market value of an individual’s
          primary residence less any outstanding amounts in respect of any
          credit facility granted to the individual or any other person that is
          secured by that residence, shall not account for more than $1 million
          (or its equivalent in a foreign currency) of the minimum amount; or
        </p>
        <p>
          (b) whose income in the preceding 12 months is not less than $300,000
          (or its equivalent in a foreign currency) or such other amount as the
          Authority may prescribe in place of the first amount;
        </p>
        <p>
          (ii) a corporation with net assets exceeding $10 million in value (or
          its equivalent in a foreign currency) or such other amount as the
          Authority may prescribe, in place of the first amount, as determined
          by —
        </p>
        <p>(a) the most recent audited balance-sheet of the corporation; or</p>
        <p>
          (b) where the corporation is not required to prepare audited accounts
          regularly, a balance-sheet of the corporation certified by the
          corporation as giving a true and fair view of the state of affairs of
          the corporation as of the date of the balance-sheet, which date shall
          be within the preceding 12 months;
        </p>
        <p>
          (iii) the trustee of such trust as the Authority may prescribe, when
          acting in that capacity; or
        </p>
        <p>(iv) such other person as the Authority may prescribe;</p>

        <h6>Institutional investor means:</h6>
        <p>(i) the Government;</p>
        <p>(ii) a statutory board specified in Part I of the Fifth Schedule;</p>
        <p>(iii) any sovereign fund entity or government-owned entity;</p>
        <p>
          (iv) any central government in a jurisdiction other than Singapore;
        </p>
        <p>
          (v) any central governmental agency in a jurisdiction other than
          Singapore;
        </p>
        <p>
          (vi) any multilateral agency, organisation or entity specified in Part
          II of the Fifth Schedule;
        </p>
        <p>(vii) a bank that is licensed under the Banking Act (Cap. 19);</p>
        <p>
          (viii) a merchant bank that is approved as a financial institution
          under section 28 of the Monetary Authority of Singapore Act (Cap.
          186);
        </p>
        <p>
          (ix) a finance company that is licensed under the Finance Companies
          Act (Cap. 108);
        </p>
        <p>
          (x) a company or co-operative society that is licensed under the
          Insurance Act (Cap. 142) to carry on insurance business in Singapore;
        </p>
        <p>(xi) a company licensed under the Trust Companies Act (Cap. 336);</p>
        <p>(xii) a holder of a capital markets services licence;</p>
        <p>
          (xiii) a person (other than an individual) carrying on business
          outside Singapore, the conduct of which, if carried on in Singapore,
          would require such person to be licensed as a holder of a capital
          markets services licence, or licensed to carry on insurance business
          under the Insurance Act (Cap. 142), or licensed, registered, approved
          or regulated by the Authority under the Banking Act (Cap. 19),
          Monetary Authority of Singapore Act (Cap. 186), Finance Companies Act
          (Cap. 108) or Trust Companies Act (Cap. 336);
        </p>
        <p>(xiv) a pension fund or collective investment scheme;</p>
        <p>
          (xv) a person (other than an individual) who carries on the business
          of dealing in bonds with accredited investors or expert investors;
        </p>
        <p>
          (xvi) the trustee of such trust as the Authority may prescribe, when
          acting in that capacity; or
        </p>
        <p>(xvii) such other person as the Authority may prescribe.</p>

        <h6>Terms</h6>
        <p>
          If you choose to enter, you agree to abide by the terms and conditions
          of our website specified at the end of the page. The terms explain
          certain restrictions imposed by law on the distribution of this
          information. If you do not agree with them you should exit this
          website.
        </p>
        <div className="disclaimer-title">
          <button className="disclaimer-btn" onClick={this.props.accepted}>
            Accept
          </button>
          <a className="disclaimer-btn" href="https://www.google.com">
            Decline
          </a>
        </div>
      </div>
    );
  }
}

export default DisclaimerPopUp;
