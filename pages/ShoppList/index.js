import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { IconButton, TextInput, Text, Subheading, Card, DefaultTheme } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import InputSpinner from 'react-native-input-spinner';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const ShoppList = () => {

  const [itemTextInput, setItemTextInput] = useState('');
  const [priceTextInput, setPriceTextInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [quantidadeTextInput, setQuantidadeTextInput] = useState(1);
  const [panelItemExpanded, setPanelItemExpanded] = useState(false);


  return (
    <View style={styles.container}>

      <View
        style={{ ...styles.rowBlock, ...styles.panelAddAcordion }}
      >
        <Subheading >
          Adicionar item
        </Subheading>
        <IconButton
          icon={panelItemExpanded ? "chevron-up" : "chevron-down"}
          size={30}
          onPress={() => { setPanelItemExpanded(!panelItemExpanded); }}
        />

      </View>

      {panelItemExpanded &&
        <View style={styles.panelAcordion}>
          <TextInput
            style={{ backgroundColor: '#FFF', width: '100%' }}
            placeholder="Digite um item"
            label="Item"
            mode="outlined"
          />
          <View style={styles.rowBlock} >
            <TextInput
              style={{ backgroundColor: '#FFF', width: '35%' }}
              label="Quant."
              placeholder="Quantidade"
              mode="outlined"
            />
            <TextInput
              style={{ backgroundColor: '#FFF', width: '45%' }}
              label="Valor"
              placeholder="Valor R$"
              mode="outlined"
            />
            <IconButton
              icon="plus-circle"
              size={30}
              onPress={() => null}
            />
          </View>
        </View>
      }

      <Subheading >Compras</Subheading>


      {/* Estudar melhor esse componente. Ainda não está com o comportamento desejado */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Card style={{ margin: 15 }} >
          <View style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 20, paddingTop: 20 }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: '100%',
                fontSize: 22,
                fontWeight: 'bold',
                height: 40
              }}
              underlineColor="#FFF"
              value={itemTextInput}
              onChangeText={text => setItemTextInput(text)}
              theme={theme}
            />
          </View>
          <Card.Content>
            <View style={styles.rowBlock}>

              <CheckBox
                value={checked}
                onValueChange={() => {
                  setChecked(!checked);
                }}
              />

              <InputSpinner
                max={10}
                min={0}
                step={1}
                colorMax={"#f04048"}
                colorMin={"#40c5f4"}
                value={quantidadeTextInput}
                onChange={(num) => {
                  setQuantidadeTextInput(num);
                }}
                skin="modern"
                height={40}
                buttonStyle={{ width: '10%' }}
                inputStyle={{ width: '10%', padding: 0 }}
              />
              {/* <TextInput
                style={{ backgroundColor: '#f0f0f7', width: '35%', height: 40, fontSize: 12 }}
                label="Quant."
                value={quantidadeTextInput}
                onChangeText={text => setQuantidadeTextInput(text)}
              /> */}


              <TextInput
                style={{ backgroundColor: '#f0f0f7', width: '35%', height: 40, fontSize: 16 }}
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
          </Card.Content>
        </Card>
      </KeyboardAvoidingView>
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
