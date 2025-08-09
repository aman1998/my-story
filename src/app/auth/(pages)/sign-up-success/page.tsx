export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl"> Thank you for signing up!</p>
      <p className="text-sm text-muted-foreground">
        You&apos;ve successfully signed up. Please check your email to confirm
        your account before signing in.
      </p>
    </div>
  );
}
