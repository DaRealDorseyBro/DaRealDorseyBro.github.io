"use client";
import Image from "next/image";
import FuseButton from './components/FuseButton';

export default function Home() {
  return (
    <div>
      <FuseButton
  label="Archive"
  doneLabel="Archived"
  undoLabel="Undo"
  color="#f5f5f5"
  background="#27272a"
  fuseColor="#f5a524"
  size="md"
  radius={22}
  undoWindow={4000}
  fuse="outline"
  fuseThickness={1.5}
  crossfadeMs={200}
  commitOn="press"
  pauseOnHover
  settle="reset"
  onCommit={() => 0}
  onUndo={() => 0}
  onFuseEnd={() => 0}
  disabled={false}
/>
    </div>
  );
}
