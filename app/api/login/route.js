import connectMongoDB from '@/libs/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import { compare, compareSync, genSalt, hash } from 'bcrypt';

export async function POST(req) {
    if (req.method !== 'POST') {
        return res.json({ message: 'Méthode non autorisée' }, { status: 405 });
    }

    try {
        await connectMongoDB();
        const { email, password } = await req.json();

        const user = await User.findOne({ email });

        console.log(email, password, user.password);
        if (!user) {
            return NextResponse.json({ message: 'L\'utilisateur n\'existe pas' }, { status: 405 });
        }

        if (compareSync(password, user.password)) {
            return NextResponse.json({ message: 'Mot de passe incorrect' }, { status: 405 });
        }

        return NextResponse.json({ message: 'Connexion réussie' }, { status: 201 });

    } catch (error) {
        console.error('Error during the connection', error);
        return NextResponse.json({ message: 'Error during the inscription' }, { status: 500 });
    }
}
