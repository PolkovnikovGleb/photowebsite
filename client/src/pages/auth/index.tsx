import React, {useState} from 'react';
import BaseButton from '../../components/ui/BaseButton';
import BaseInput from '../../components/ui/BaseInput';

import s from './styles.module.scss'

const Auth = (): React.JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={s.auth}>
      <div className={s.auth__content}>
        <BaseInput
          name="Email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <BaseInput
          name="Password"
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <BaseButton
          type='submit'
        >
          Log In
        </BaseButton>
        <p className={s.auth__forgot}>Forgot your password?</p>
      </div>
    </div>
  )
}

export default Auth;
