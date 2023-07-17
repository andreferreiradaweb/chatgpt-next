'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"

import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
  })

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using vercel SDK to creat a chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[440px] w-full space-y-4 pr-4">
            { messages.map((message) => (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                { message.role === 'user' && 
                  <Avatar>
                    <AvatarFallback>AF</AvatarFallback>
                    <AvatarImage src="https://github.com/andreferreiradaweb.png" />
                  </Avatar>
                }
                { message.role === 'assistant' && 
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://github.com/openai.png" />
                  </Avatar>
                }
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">{ message.role === 'user' ? 'Usuário' : 'Rocketseat' }:</span>
                  {message.content}
                </p>
              </div>
            )) }
          </ScrollArea>
        </CardContent>
        <CardFooter >
          <form className="w-full flex gap-2" action="" onSubmit={handleSubmit}>
            <Input placeholder="How can i help ya?" value={input} onChange={handleInputChange}></Input>
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
