import { useState, useEffect, useMemo } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";
import { interactData } from "~/functions/interactData";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { rootURL } from "~/api";
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

  const updateDataURL = `${rootURL}/actions/updateProfile.php`;

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

    if (Object.keys(updateData).length === 0) {
      return;
    }

    interactData(updateDataURL, "POST", updateData, (response) => {
      if (response.message === "Profile updated successfully") {
        localStorage.setItem("userData", JSON.stringify(newUserData));
        Swal.fire({
          title: "Success",
          text: "Profile updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });
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
                          value={newUserData.name || userData.name || ""}
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
                          value={newUserData.email || userData.email || ""}
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
                          value={newUserData.phone || userData.phone || ""}
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
