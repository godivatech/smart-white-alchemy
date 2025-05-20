
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from 'sonner';

const services = [
  { id: 'haircut', name: 'Expert Haircut', duration: '30 min', price: '₹250+' },
  { id: 'beard', name: 'Beard Styling', duration: '20 min', price: '₹150+' },
  { id: 'color', name: 'Hair Color', duration: '60 min', price: '₹500+' },
  { id: 'express', name: 'Express Treatment', duration: '45 min', price: '₹350+' }
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', 
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

interface QuickBookingModalProps {
  className?: string;
  variant?: 'default' | 'outline';
}

const QuickBookingModal = ({ 
  className,
  variant = 'default'
}: QuickBookingModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !phone || !service || !date || !time) {
      toast.error("Please fill all the fields");
      return;
    }

    // Here you would typically send the booking data to your backend
    console.log({ name, phone, service, date, time });
    
    // Show success message
    toast.success("Appointment booked successfully! We'll confirm shortly.");
    
    // Reset form and close modal
    resetForm();
    setOpen(false);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setService('');
    setDate('');
    setTime('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className} variant={variant}>
          <Calendar className="mr-2 h-4 w-4" />
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-salon-black border-salon-gold/50">
        <DialogHeader>
          <DialogTitle className="text-salon-gold text-xl">Quick Appointment</DialogTitle>
          <DialogDescription>
            Book your salon appointment in just a few clicks.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="John Doe"
              className="bg-salon-darkgray border-salon-gold/30"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="+91 9876543210"
              className="bg-salon-darkgray border-salon-gold/30"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service">Select Service</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="bg-salon-darkgray border-salon-gold/30">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent className="bg-salon-black border-salon-gold/30">
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.id} className="focus:bg-salon-gold/20 focus:text-white">
                    {service.name} ({service.price})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input 
                id="date" 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)}
                className="bg-salon-darkgray border-salon-gold/30"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger className="bg-salon-darkgray border-salon-gold/30">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent className="bg-salon-black border-salon-gold/30">
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot} className="focus:bg-salon-gold/20 focus:text-white">
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="border-salon-gold text-salon-gold hover:bg-salon-gold/20"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-salon-gold text-salon-black hover:bg-salon-gold-light"
            >
              Book Appointment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuickBookingModal;
