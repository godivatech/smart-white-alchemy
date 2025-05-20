
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";

interface QuickBookingModalProps {
  variant?: "default" | "outline" | "gold" | "outlineGold";
  className?: string;
  buttonClassName?: string;
}

const QuickBookingModal = ({ 
  variant = "gold", 
  className,
  buttonClassName
}: QuickBookingModalProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (name && phone && service && date) {
        toast({
          title: "Booking Request Sent!",
          description: `We'll confirm your appointment for ${format(date, "PPP")} shortly.`,
          variant: "default",
        });
        
        // Reset form
        setName("");
        setPhone("");
        setService("");
        setDate(undefined);
        setNotes("");
        setOpen(false);
      } else {
        toast({
          title: "Booking Failed",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={cn("py-3", className, buttonClassName)}>Book Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-salon-darkgray border-salon-gold/50 text-white">
        <DialogHeader>
          <DialogTitle className="text-salon-gold font-playfair text-2xl">Book an Appointment</DialogTitle>
          <DialogDescription className="text-gray-300">
            Fill out the form below to request an appointment at SMART & WHITE.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name*
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3 bg-salon-black/50 border-salon-gold/30 focus:border-salon-gold"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone*
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-3 bg-salon-black/50 border-salon-gold/30 focus:border-salon-gold"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="service" className="text-right">
                Service*
              </Label>
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger className="col-span-3 bg-salon-black/50 border-salon-gold/30 focus:border-salon-gold">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-salon-darkgray border-salon-gold/30">
                  <SelectItem value="haircut">Haircut</SelectItem>
                  <SelectItem value="beard">Beard Styling</SelectItem>
                  <SelectItem value="color">Hair Color</SelectItem>
                  <SelectItem value="express">Express Treatment</SelectItem>
                  <SelectItem value="facial">Facial</SelectItem>
                  <SelectItem value="massage">Massage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date*
              </Label>
              <div className="col-span-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-salon-black/50 border-salon-gold/30 focus:border-salon-gold",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-salon-darkgray border-salon-gold/30">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="bg-salon-darkgray text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="notes" className="text-right pt-2">
                Notes
              </Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="col-span-3 bg-salon-black/50 border-salon-gold/30 focus:border-salon-gold"
                placeholder="Any special requests?"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="submit" 
              variant="gold"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <LoadingSpinner size="sm" className="mr-2" /> 
                  Processing...
                </span>
              ) : (
                "Request Appointment"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuickBookingModal;
