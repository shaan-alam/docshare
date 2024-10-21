"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

const Auth = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div>
        <Card className="max-w-[600px]">
          <CardHeader className="flex gap-3 p-12">
            <Image
              alt="nextui logo"
              radius="sm"
              src="/docshare-logo.png"
              height={100}
            />
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Sign-in to start using docshare services.</p>
            <Button
              color="primary"
              className="my-4 bg-[#121212]"
              onClick={() =>
                signIn("github", { redirect: true, callbackUrl: "/dashboard" })
              }
              disableRipple
            >
              <IconBrandGithub />
              GitHub Sign-in
            </Button>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/">Go Back</Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Auth;
