import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

type Props = {
  price: number;
  capacity: number;
};

const TicketCheckoutCard = ({
  price,
  capacity,
}: Props) => {
  const soldOut = capacity === 0;

  const handleCheckout = () => {
    if (!soldOut) {
      window.location.href = "/checkout";
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Tickets
          </h2>

          <Badge variant={soldOut ? "destructive" : "secondary"}>
            {soldOut ? "Sold Out" : price === 0 ? "Free" : `$${price}`}
          </Badge>
        </div>

        <Separator />

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Remaining Capacity
          </p>

          <p className="text-3xl font-bold">
            {capacity}
          </p>
        </div>

        {soldOut ? (
          <Button
            disabled
            className="w-full"
            variant="destructive"
          >
            Sold Out
          </Button>
        ) : (
          <Button
            onClick={handleCheckout}
            className="w-full"
          >
            Register Now
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TicketCheckoutCard;