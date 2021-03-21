import React, { useState } from 'react'
import { View } from 'react-native'
import { IconButton, TextInput, Text, Subheading } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const ShoppList = () => {

  const [itemTextInput, setItemTextInput] = useState('');
  const [priceTextInput, setPriceTextInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [quantidadeTextInput, setQuantidadeTextInput] = useState('');

  return (
    <View style={styles.container}>

      <Subheading>Adicionar item</Subheading>
      <TextInput
        style={{ backgroundColor: '#FFF', width: '100%' }}
        placeholder="Digite um item"
        label="Item"
      />
      <View style={styles.rowBlock}>
        <TextInput
          style={{ backgroundColor: '#FFF', width: '35%' }}
          label="Quant."
          placeholder="Quantidade"
        />
        <TextInput
          style={{ backgroundColor: '#FFF', width: '45%' }}
          label="Valor"
          placeholder="Valor R$"
        />
        <IconButton
          icon="plus-circle"
          size={30}
          onPress={() => null}
        />
      </View>

      <Subheading>Compras</Subheading>
      <View style={styles.rowBlock}>

        <CheckBox
          value={checked}
          onValueChange={() => {
            setChecked(!checked);
          }}
        />

        {/* <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        /> */}

        <TextInput
          style={{ backgroundColor: '#f0f0f7', width: '10%' }}
          label="Quant."
          value={quantidadeTextInput}
          onChangeText={text => setQuantidadeTextInput(text)}
        />

        <TextInput
          style={{ backgroundColor: '#f0f0f7', width: '30%' }}
          label="Item"
          value={itemTextInput}
          onChangeText={text => setItemTextInput(text)}
        />

        <TextInput
          style={{ backgroundColor: '#f0f0f7', width: '10%' }}
          label="Valor"
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

          style={{ backgroundColor: '#f0f0f7', width: '70%' }}
          label="Valor estimado"
          placeholder="Total estimado (R$)"
        />
        <Text>
          Total: R$ 00,00
        </Text>
      </View>

    </View>
  )
}

export default ShoppList;
