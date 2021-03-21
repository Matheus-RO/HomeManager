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
    justifyContent: 'space-between',
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
          style={{ backgroundColor: '#FFF', width: '50%' }}
          placeholder="Digite um item"
        />
        <TextInput
          style={{ backgroundColor: '#FFF', width: '35%' }}
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
          onChangeText={text => setItemTextInput(text)}
        />

        <TextInput

          placeholder="Valor"
          value={priceTextInput}
          onChangeText={text => setPriceTextInput(text)}
        />

        <IconButton
          icon="delete"
          size={30}
          onPress={() => null}
        />
      </View>

      <View style={styles.rowBlock}>
        <TextInput

          style={{ backgroundColor: '#FFF', width: '50%' }}
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
