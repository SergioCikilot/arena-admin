import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Icon,
  Image,
  Dropdown,
  Button,
  Container,
  Menu,
  Checkbox,
  Tab,
} from "semantic-ui-react";
import Cookies from "universal-cookie";
import {
  getPitchByPitchId,
  getPitchesByUserId,
} from "../services/pitchService";

export default function Navi({ signOut, auth }) {
  const cookies = new Cookies();
  const navigate = useNavigate();
  function navigator(params) {
    navigate("/");
  }
  const [ownedPitches, setOwnedPitches] = useState([]);

  useEffect(() => {
    var userId = cookies.get("userId");
    async function getPitches() {
      let resp = await getPitchesByUserId(auth, userId);

      setOwnedPitches(resp.data);
    }

    getPitches();
  }, []);

  return (
    <Menu inverted fixed="top">
      <Menu.Item onClick={() => navigator()}>
        <Image
          rounded
          size="tiny"
          src="https://arenastorageapp.blob.core.windows.net/arenadmin/arad1.png"
        />
      </Menu.Item>
      <Menu.Item name="Ana sayfa" onClick={() => navigator()} />
      <Menu.Item name="Iletişim" as={NavLink} to="/admin/communication" />
      <Menu.Item name="Bilgi" />

      <Menu.Menu position="right">
        <Menu.Item>
          <Checkbox defaultChecked toggle />
        </Menu.Item>

        <Dropdown item icon={<Icon name="bell outline" />}>
          <Dropdown.Menu>
            <Dropdown.Item>Notification1</Dropdown.Item>
            <Dropdown.Item>Notification2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Image
            avatar
            spaced="right"
            src={
              ownedPitches.length == 0
                ? ""
                : "https://arenastorageapp.blob.core.windows.net/pitchprofilepics/p" +
                  ownedPitches[0]["pitchId"] +
                  ".png"
            }
          />
          <Dropdown
            pointing="top left"
            text={ownedPitches.length == 0 ? "" : ownedPitches[0]["pitchName"]}
          >
            <Dropdown.Menu>
              <Dropdown.Item text="Bilgilerim" icon="info" />
              <Dropdown.Item
                onClick={signOut}
                text="Çıkış yap"
                icon="sign-out"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>

      {/* <Menu.Menu position='right'>


                </Menu.Menu> */}
    </Menu>
  );
}
