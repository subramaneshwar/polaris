import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { SignInButton } from "@clerk/nextjs";
import { ShieldIcon } from "lucide-react";
import React from "react";

const UnauthenticatedView = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-lg bg-muted">
        <Item variant="outline">
          <ItemMedia variant="icon">
            <ShieldIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Unauthorised Access</ItemTitle>
            <ItemDescription>
              You need to be signed in to access this page. Please sign in or
              sign up to continue.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </ItemActions>
        </Item>
      </div>
    </div>
  );
};

export default UnauthenticatedView;
