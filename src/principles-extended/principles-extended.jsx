import React, {Component} from "react";
import "./principles-extended.css";

const Principles_Extended = () => {
  return (
    <div id="principles-extended">
      <div className="animated fadeIn slow">
        <h2>The Chicago Approach</h2>
        <p>
          We are guided by the core principles of the scientific method and
          imbued with a healthy dose of scepticism. As taught at the University
          of Chicago, the scientific method is based on data and theory working
          together. An empirical finding that has no basis in theory is as
          likely to be overturned as reconfirmed by the next researcher. A
          theory that is not supported by the data is not a theory but a
          conjecture.
        </p>

        <p>
          When applied to quantitative investing, this set of intellectual
          values means we are wary of overfitting and do not invest based on a
          potential signal until we get an idea of why such a signal might
          exist, based on economic or accounting principles. We do not aim to
          always beat the market at every horizon, Instead, our portfolio
          allocations tilt towards factors that have been shown to outperform at
          longer investment horizons across multiple countries. Our portfolios
          are designed for long-term investors from both a retail and
          institutional background.
        </p>

        <h4>Disciplined but not Passive</h4>
        <p>
          We implement a disciplined asset allocation based on academic and
          industry quantitative research, but this does not mean that our asset
          mix is passive. We rebalance our portfolio at the quarterly level but
          have low turnover.
        </p>

        <h4>Simple but not Easy</h4>
        <p>
          Even though the factors to which we allocate are well known, most
          investors do not enjoy the returns those factors provide. For example,
          emerging markets crashed 53% in the 2008 Financial Crisis but by the
          time these markets returned 79% in just the next year, many investors
          have already pulled out their money and missed a large part of the
          recovery.
        </p>

        <h4>Rigorous but not Cynical</h4>
        <p>
          Unlike diehard believers in full market efficiency, we update our
          beliefs based on rigorous data-driven research. We adapt our portfolio
          allocation and strategy based on new research that reveals robust
          historical patterns without relying on overfitting.
        </p>

        <h4>Quantitative but not a Blackbox</h4>
        <p>
          We do not mechanically invest in strategies suggested by an algorithm
          or research result without delving to understand the likely driver of
          such a factor. If we do not know why a strategy works, we will not
          know why it does not work when such a time comes.
        </p>

        <h4>Investing based on the Signal but not the Noise</h4>
        <p>
          We review multiple signals by reproducing, replicating, backtesting,
          and comparing different signals based on economic and accounting
          principles. The result is a signal compressor that accounts for
          time-varying correlation of factors.
        </p>
      </div>
    </div>
  );
};

export default Principles_Extended;
