import { TRPCProvider } from '@/trpc';
import '../global.css';
import { Slot } from 'expo-router';

export default function Layout() {

  return <TRPCProvider><Slot /></TRPCProvider>;
}
