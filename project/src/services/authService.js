import User from '../models/User.js';

export const registerUser = async (userData) => {
  try {
    const { name, email, password } = userData;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error('User already exists');
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password
    });

    return {
      _id: user._id,
      name: user.name,
      email: user.email
    };
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    // Check for user email
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    return {
      _id: user._id,
      name: user.name,
      email: user.email
    };
  } catch (error) {
    throw error;
  }
}; 