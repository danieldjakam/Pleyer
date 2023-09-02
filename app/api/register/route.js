import connectMongoDB from '@/libs/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import { genSalt, hash } from 'bcrypt';

export async function POST(req) {
    if (req.method !== 'POST') {
        return res.json({ message: 'Méthode non autorisée' }, { status: 405 });
    }

    try {
        await connectMongoDB();
        const { name, subname, email, password } = await req.json();

        if (!name || !subname || !email || !password) {
            return NextResponse.json({ message: 'Please fill all !!' }, { status: 400 });
        }

        const existingUser = await User.findOne({ email }) || await User.findOne({ name });
        if (existingUser) {
            return NextResponse.json({ message: 'User exist !!' }, { status: 400 });
        }

        const salt = await genSalt();
        const hashedPassword = await hash(password, salt);

        const newUser = new User({ name, subname, email, password: hashedPassword });
        await newUser.save();

        return NextResponse.json({ message: 'User registered' }, { status: 201 });
    } catch (error) {
        console.error('Error during the inscription', error);
        return NextResponse.json({ message: 'Error during the inscription' }, { status: 500 });
    }
}
