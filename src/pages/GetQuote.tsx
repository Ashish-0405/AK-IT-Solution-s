import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from 'emailjs-com'
import { toast } from "sonner";

const GetQuote = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await emailjs
      .send(
        "service_r4gp5ie",
        "template_csch1zs",
        formData,
        "RXgBtTzMg_WkvmdQP"
      ).then(() => {
        toast.success("✅ Thanks for reaching out! We'll get back to you shortly.")
        setFormData({
          name: "",
          email: "",
          service: "",
          message: ""
        })
      },
        (error) => {
          console.log("Error=========>", error);
        }
      )
  }

  return (
    <div className="container mx-auto px-2 py-2">
      <Card className="max-w-4xl mx-auto">
        <CardContent>
          <form className="space-y-6 py-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <Input id="name" placeholder="Enter your name" onChange={handleChange} value={formData.name} name="name" required/>
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="Enter your email" onChange={handleChange} value={formData.email} name="email" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="service">Service</label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                name="service"
              >
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                  <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="it-support">IT Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <Textarea id="message" placeholder="Tell us about your project" onChange={handleChange}
                value={formData.message}
                name="message" />
            </div>
            <Button type="submit" size="lg" className="w-full">Get a Quote</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GetQuote;