import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import "./SignIn.css";

const SignIn = () => {
  const nav = useNavigate();
  const [numEntered, setNumEntered] = useState(false);
  const [enableButton, setEnableButton] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  function getPhoneNum(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value) {
      setNumEntered(true);
      if (e.target.value.length === 10) {
        setEnableButton(true);
      } else {
        setEnableButton(false);
      }
    } else {
      setNumEntered(false);
    }
  }
  return (
    <>
      <Header />
      <div className="signin-container">
        <div className="signin-content">
          <div className="signin-label">Sign in to continue</div>
          <div className="signin-mobile-input">
            <label className="signin-mobile-label">
              Enter your Mobile Number
            </label>
            <div className="signin-mobile-num-grp">
              <div className="signin-mobile-prepend">+91</div>
              <input
                type="tel"
                minLength="10"
                maxLength="10"
                onChange={(e) => {
                  getPhoneNum(e);
                }}
              />
            </div>
            {numEntered ? (
              <div
                className="or signin-terms-cond"
                onClick={() => setTermsChecked(!termsChecked)}
              >
                {termsChecked ? (
                  <img
                    className="signin-check"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAS1BMVEWqqqr/ygD/yQD3xwj/yQD/ygD//wD/ygBHcEz/ygD/yQD/ygL/ygD/ygD7yAT/ywP/ygDjxhz6yQX/ywL/yQD2ygnzxQz7ygT/yQBP8/qYAAAAGHRSTlMDqMwg7VwEywDK3n2RqTxYrQkvcO4dFj+4ggmpAAAAeElEQVQY023RRxbDIAwEUFE1gEt6dP+TZhMLsDXL/yhiICC5wpriEkBYJfqOPsoKSrJkDMmLJHIx05QcHRWPGeELMZ+RecZw2y4YquxnDFVa335/dFN8SlNTfFdph/UzQ5XX34aLdN005+c7Dm8+0yzErM4s2fqOH8zvCHa/b61ZAAAAAElFTkSuQmCC"
                    alt="decheck"
                  />
                ) : (
                  <img
                    className="signin-check"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAIVBMVEX///9HcEz///////////////////////////////////+jWTucAAAACnRSTlPLAMoEqMztXKmRjALuyAAAAEFJREFUCNdjECxRYAACJndBBollASAma1YjQ9VkQTCwXM7gZghhCqcwqApCQRADA4zJQA8mksVIzkFyJJLTER4CANoTFJcRSaRgAAAAAElFTkSuQmCC"
                    alt="decheck"
                  />
                )}

                <span className="ageConsentMessage">
                  <span className="signin-consent">
                    I am above 18 years of age and have read and hereby accept
                    the{" "}
                    <a
                      href="https://www.sonyliv.com/terms-of-use"
                      id="terms-of-use"
                      target="_blank"
                      className="normal-link"
                      rel="noopener noreferrer"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.sonyliv.com/privacy-policy"
                      id="privacy-policy"
                      target="_blank"
                      className="normal-link"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </span>
              </div>
            ) : (
              <div className="or">Or</div>
            )}
          </div>
          {numEntered ? (
            <div>
              <button
                className="activate-signin-btn"
                disabled={!enableButton || !termsChecked}
                onClick={() => nav("/")}
              >
                Continue
              </button>
            </div>
          ) : (
            <span className="signin-already-registered">
              Already registered with email or Google/Facebook?
            </span>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SignIn;
