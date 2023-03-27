import { Text, View, Image } from 'react-native';
import { login } from './style';
import { Stack, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Login() {
    function Logar(){
        fetch('http://localhost:3000/user' , {
            method: 'POST',
            body: JSON.stringify({
                nome: 'admin',
                senha: 'admin'
            })
        },
        )
        .then( (resposta) => console.log(resposta.json()))
    }

    return (
      <View style={login.container}>
        <Image style={login.logo} source={require('./img/Logo.svg')} />
        <Text style={login.title}>Solicity</Text>
        <Text>Combatendo a insegurança alimentar</Text>

        <Stack spacing={2} style={{ margin: 16 }}>
        <TextInput
            label="Usuario"
            leading={props => <Icon name="account" {...props} />}
            />
        <TextInput
            label="Senha"
            leading={props => <Icon name="lock" {...props} />}
            />
        </Stack>
        <Button title="Contained" style={login.send} />
      </View>
    );
  }
