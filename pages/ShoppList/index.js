import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox, IconButton, TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  rowBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const ShoppList = () => {

  const [checked, setChecked] = useState(false);
  const [itemTextInput, setItemTextInput] = useState('');
  const [priceTextInput, setPriceTextInput] = useState('');

  return (
    <View>
      <View style={styles.rowBlock}>
        <TextInput
          placeholder="Digite um item"
        />
        <TextInput
          placeholder="Valor R$"
        />
        <IconButton
          icon="plus-circle"
          size={30}
          onPress={() => null}
        />
      </View>

      <View style={styles.rowBlock}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />

        <TextInput
          placeholder="Item"
          value={itemTextInput}
          onChangeText={itemTextInput => setItemTextInput(itemTextInput)}
        />

        <TextInput

          placeholder="Valor"
          value={priceTextInput}
          onChangeText={priceTextInput => setPriceTextInput(priceTextInput)}
        />

        <IconButton
          icon="delete"
          size={30}
          onPress={() => null}
        />
      </View>

      <View style={styles.rowBlock}>
        <TextInput
          mode="outline"
          label="Valor estimado"
          placeholder="Adicione o total estimado"
        />
        <TextInput
          disabled="false"
          placeholder="R$ 00,00"
        />
      </View>

    </View>
  )
}

export default ShoppList;
