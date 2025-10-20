import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Copy, Heart } from 'lucide-react';

const EVM_ADDRESS = '0x213b027ccE5dCF0f1465BcbED3d9B85F2308BB61';
const SOL_ADDRESS = '5iT6JkW3XPsLhPv6gB1zvoRnyBS2HkH8GGpBrk4kigAp';

const ETH_ICON = 'https://ethereum.org/images/assets/svgs/eth-diamond-purple.svg';
const SOL_ICON = 'https://solana.com/src/img/branding/solanaLogoMark.svg';
const USDC_ICON = 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg';
const USDT_ICON = 'https://cryptologos.cc/logos/tether-usdt-logo.svg';

const CopyField: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {}
  };

  return (
    <div className="space-y-2">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <div className="flex gap-2">
        <Input readOnly value={value} className="font-mono" />
        <Button type="button" variant="secondary" onClick={onCopy} aria-label={`Copy ${label}`}>
          <Copy className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const CoinPill: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
    <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const DonationWidget: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setOpen(true)} className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
          <Heart className="w-4 h-4" />
          <span className="hidden sm:inline">Support InfoFI</span>
          <span className="sm:hidden">Donate</span>
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-600" />
              Keep InfoFI running – $20 goal
            </DialogTitle>
            <DialogDescription>
              We rely on community support. A small donation helps us cover hosting and keep the site fast and ad-light.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="evm" className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="evm" className="flex items-center gap-2">
                <img src={ETH_ICON} alt="EVM" className="w-4 h-4" />
                EVM (Ethereum & EVM chains)
              </TabsTrigger>
              <TabsTrigger value="sol" className="flex items-center gap-2">
                <img src={SOL_ICON} alt="Solana" className="w-4 h-4" />
                Solana
              </TabsTrigger>
            </TabsList>

            <TabsContent value="evm" className="space-y-4">
              <CopyField label="EVM Address" value={EVM_ADDRESS} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <CoinPill icon={ETH_ICON} label="ETH" />
                <CoinPill icon={USDC_ICON} label="USDC" />
                <CoinPill icon={USDT_ICON} label="USDT" />
                <CoinPill icon={ETH_ICON} label="Any ERC-20" />
              </div>
            </TabsContent>

            <TabsContent value="sol" className="space-y-4">
              <CopyField label="Solana Address" value={SOL_ADDRESS} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <CoinPill icon={SOL_ICON} label="SOL" />
                <CoinPill icon={USDC_ICON} label="USDC" />
                <CoinPill icon={USDT_ICON} label="USDT" />
                <CoinPill icon={SOL_ICON} label="Any SPL Token" />
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button onClick={() => setOpen(false)} variant="secondary">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DonationWidget;


