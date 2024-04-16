import { useState, useRef, useEffect, useCallback, useMemo } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";
import { interactData } from "~/functions/interactData";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
const cx = classNames.bind(styles);
function Profile() {
  const emptyData = {
    id: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
  };
  const [userData, setUserData] = useState(emptyData);
  const [newUserData, setNewUserData] = useState(emptyData);

  const updateDataUTL =
    "http://localhost/fashion-store/actions/updateProfile.php";

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  useEffect(() => {
    setNewUserData(userData);
  }, [userData]);

  const updateData = useMemo(
    () => ({
      id: userData.id,
      ...Object.keys(newUserData).reduce((acc, key) => {
        if (userData[key] !== newUserData[key]) {
          acc[key] = newUserData[key];
        }
        return acc;
      }, {}),
    }),
    [userData, newUserData]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  console.log(newUserData);
  const handleSave = (e) => {
    e.preventDefault();

    const fields = [
      { name: "username", value: newUserData.username },
      { name: "email", value: newUserData.email },
      { name: "phone", value: newUserData.phone },
    ];

    const isValid = isValidation(fields, (error) => {
      setUsernameError(error.username || "");
      setEmailError(error.email || "");
      setPhoneError(error.phone || "");
    });

    if (Object.keys(updateData).length === 0) {
      return;
    }

    if (isValid) {
      interactData(changeAccountInfoURL, "POST", updateData, (response) => {
        if (response.message === "Account information updated") {
          handleResponse("Account information updated");
          localStorage.setItem("userData", JSON.stringify(newUserData));
          setUsernameError("");
          setEmailError("");
          setPhoneError("");
          setEditable(false);
        }
        if (response.message === "This username already exists") {
          setUsernameError(errorMessages.username.exist);
        }
        if (response.message === "This email already exists") {
          setEmailError(errorMessages.email.exist);
        }
        if (response.message === "This phone already exists") {
          setPhoneError(errorMessages.phone.exist);
        }
      });
    }
  };

  return (
    <Container className={cx("profile")}>
      <Row className={cx("profile-container")}>
        <Col lg={3} className={cx("profile-sidebar")}>
          <div className={cx("sidebar-header")}>
            <h2 className={cx("sidebar-title")}>Hello</h2>
          </div>
          <div className={cx("sidebar-content")}>
            <ul className={cx("sidebar-list")}>
              <li className={cx("sidebar-item")}>
                <Link className={cx("sidebar-link")} to="/account-information">
                  Account Information
                </Link>
              </li>
              <li className={cx("sidebar-item")}>
                <Link className={cx("sidebar-link")} to="/account-information">
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          <span className={cx("logout-button")}>LOG OUT</span>
        </Col>
        <Col lg={9} className={cx("profile-content")}>
          <div className={cx("content-header")}>
            <h2 className={cx("content-title")}>Account Information</h2>
          </div>
          <div className={cx("content-form")}>
            <Row className={cx("form-container")}>
              <Col lg={8}>
                <Form action="" method="">
                  <Container className={cx("form-group")}>
                    <Row>
                      <Col lg={3}>
                        <label htmlFor="formName" className={cx("form-label")}>
                          Name
                        </label>
                      </Col>
                      <Col lg={9} className={cx("input-container")}>
                        <input
                          className={cx("info-input")}
                          type="text"
                          name="name"
                          value={userData.name || newUserData.name || ""}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Container>
                  <Container className={cx("form-group")}>
                    <Row>
                      <Col lg={3}>
                        <label htmlFor="formEmail" className={cx("form-label")}>
                          Email
                        </label>
                      </Col>
                      <Col lg={9} className={cx("input-container")}>
                        <input
                          className={cx("info-input")}
                          type="email"
                          name="email"
                          value={userData.email || newUserData.email || ""}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Container>
                  <Container className={cx("form-group")}>
                    <Row>
                      <Col lg={3}>
                        <label htmlFor="formPhone" className={cx("form-label")}>
                          Phone
                        </label>
                      </Col>
                      <Col lg={9} className={cx("input-container")}>
                        <input
                          className={cx("info-input")}
                          type="text"
                          name="phone"
                          value={userData.phone || newUserData.phone || ""}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Container>
                  <div className={cx("form-footer")}>
                    <span className={cx("edit")}>EDIT</span>
                    <span className={cx("change-password")}>
                      CHANGE PASSWORD
                    </span>
                    <button
                      type="submit"
                      className={cx("btn-save")}
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </Form>
              </Col>
              <Col lg={4}>
                <div className={cx("avatar-container")}>
                  <img
                    className={cx("avatar")}
                    src="https://cdn.dribbble.com/userupload/7899795/file/original-7c498c1b6e9bb43ac93fe5918fafdf99.jpg?resize=1200x1200"
                    alt="avatar"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
