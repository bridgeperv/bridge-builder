"use client";
  import React from "react";
import {Dropdown as DD, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Dropdown({ children, dropdownContent }: { children: React.ReactNode, dropdownContent:any}) {
  return (
  
    
      
        <DD>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
            >
              {children}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {dropdownContent.map((item:any) => (
              <DropdownItem key={item.name} onClick={() => console.log(item.name)}>
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </DD>
  
    
  );
}