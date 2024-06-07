import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem, Icon, Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { map } from "lodash";
import { Modal } from "../../components";
import { ChangeDisplayNameForm } from "./ChangeDisplayNameForm";
import { ChangePasswordForm } from "./ChangePasswordForm";

export function AccountOptions(props) {
  const { onReload } = props;

  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);

  const selectedComponent = (key) => {
    if (key === "displayName") {
      setRenderComponent(
        <ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload} />
      );
    }
    if (key === "password") {
      setRenderComponent(<ChangePasswordForm onClose={onCloseOpenModal} />);
    }

    onCloseOpenModal();
  };

  const menuOptions = getMenuOptions(selectedComponent);

  return (
    <View style={styles.btn}>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} onPress={menu.onPress} style={styles.item}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameCenter}
            color={menu.iconColorCenter}
            style={{ width: 50 }}
          />
          <ListItem.Content></ListItem.Content>
        </ListItem>
      ))}
      <Button
        title="Logout"
        buttonStyle={{ backgroundColor: "white" }}
        titleStyle={{ color: "black" }}
        onPress={logout}
      />
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
  return [
    {
      iconType: "material-community",
      iconNameCenter: "account-edit",
      iconColorCenter: "#000",
      onPress: () => selectedComponent("displayName"),
    },
    {
      iconType: "material-community",
      iconNameCenter: "lock-reset",
      iconColorCenter: "#000",
      onPress: () => selectedComponent("password"),
    },
  ];
}

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    gap: 20,
  },
  item: {
    height: 60,
    width: 100,
  },
});
