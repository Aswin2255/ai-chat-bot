'use server';

import { LoginInput, SignupInput } from '@/lib/authvalidations/authschema';
import User from '@/lib/models/User';

export async function signupAction(formdata: SignupInput) {
  try {
    const { email, password, confirmPassword } = formdata;
    console.log(password, confirmPassword);
    const isexistingUser = await User.findOne({ email });
    if (isexistingUser) return { status: false, message: 'User Already Exist' };
  } catch {
    return {
      success: false,
      errors: 'login falied',
    };
  }
}

export async function loginAction(formdata: LoginInput) {
  try {
    console.log(formdata);
  } catch {}
}
