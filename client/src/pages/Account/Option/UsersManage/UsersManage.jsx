/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import Rodal from 'rodal';

import DeleteIcon from '@mui/icons-material/Delete';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import 'rodal/lib/rodal.css';

import './UsersManage.scss';

const users = axios.create({
  baseURL: 'http://127.0.0.1:8001/api/users',
});
const UsersManage = () => {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const admin = useRef();
  const [visible, setVisible] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState({});
  const [userEdit, setUserEdit] = useState(false);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const handleAutocomplete = (event, value) => {
    setSearch(value);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    setUserEdit(false);
  };
  const handleUsers = (user) => {
    show();
    setUser(user);
  };
  const handleUserRemove = async (user) => {
    await users.delete(`/${user._id}`);
    hide();
  };
  const handleUserEdit = async (user, a, u = null, p = null, e = null) => {
    const username = u || user.username;
    const password = p || user.password;
    const email = e || user.email;
    const admin = a ? JSON.parse(a.toLowerCase()) : user.admin;

    await users.patch(`/${user._id}`, { username, password, email, admin });
  };

  useEffect(() => {
    users.get('/').then((res) => {
      setUsersList(res.data);
    });
  }, []);
  useEffect(() => {
    setSearchList(
      usersList.filter((user) => user.username.toLowerCase().includes(search.toLowerCase())),
    );
    // eslint-disable-next-line
  }, [search]);
  return (
    <div className="usersManage form-control">
      <div className="usersManage__header">
        <Autocomplete
          freeSolo
          options={usersList.map((u) => u.username)}
          onChange={handleAutocomplete}
          renderInput={(params) => (
            <TextField
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              label="Search"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
              variant="filled"
            />
          )}
        />
      </div>
      <div className="usersManage__usersList">
        {search
          ? searchList.map((u) => (
              <div className="usersManage__item" key={u._id} onClick={() => handleUsers(user)}>
                {user.username}
              </div>
            ))
          : usersList.map((u) => (
              <div className="usersManage__item" key={u._id} onClick={() => handleUsers(user)}>
                {user.username}
              </div>
            ))}
        <Rodal visible={visible} onClose={hide} animation="fade" className="usersManage__modal">
          {!userEdit ? (
            <div className="usersManage__modalContent form-control">
              <div>
                نام کاربری : <span>{user.username}</span>
              </div>

              <div>
                ایمیل : <span>{user.email}</span>
              </div>
              <div>
                مدیر : <span>{user.admin ? 'Yes' : 'No'}</span>
              </div>
            </div>
          ) : (
            <div className="usersManage__modalContent form-control">
              <input
                type="username"
                placeholder={user.username}
                className="form-control"
                ref={username}
              />
              <input
                type="password"
                className="form-control"
                autoComplete="new-password"
                ref={password}
              />
              <input type="email" placeholder={user.email} className="form-control" ref={email} />
              <select className="form-select" ref={admin} defaultValue={user.admin}>
                <option value="true">admin</option>
                <option value="false">user</option>
              </select>
            </div>
          )}
          {!userEdit ? (
            <div className="usersManage__modalFooter">
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleUserRemove(user)}
              >
                حذف حساب کاربری <DeleteIcon />
              </button>
              <button
                type="button"
                className="btn btn-outline-success btn-sm"
                onClick={() => setUserEdit(true)}
              >
                ویرایش حساب کاربری
              </button>
              <button type="button" className="btn btn-outline-primary " onClick={hide}>
                بستن
              </button>
            </div>
          ) : (
            <div className="usersManage__modalFooter">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() =>
                  handleUserEdit(
                    user,
                    username.current.value,
                    password.current.value,
                    email.current.value,
                    admin.current.value,
                  )
                }
              >
                ویرایش
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setUserEdit(false)}
              >
                خروج از حالت ویرایش
              </button>
            </div>
          )}
        </Rodal>
      </div>
    </div>
  );
};

export default UsersManage;
