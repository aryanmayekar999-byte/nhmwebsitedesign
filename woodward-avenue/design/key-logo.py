# Keys the supplied logo (charcoal/copper/red on black) into transparent PNGs.
# Run from the repo root: python3 woodward-avenue/design/key-logo.py  (needs Pillow + numpy)
from PIL import Image
import numpy as np
im=np.asarray(Image.open('woodward-avenue/design/woodward-logo-source.jpg').convert('RGB')).astype(float)
H,W,_=im.shape
mx=im.max(2); mn=im.min(2); sat=mx-mn
# sample colours
neutral=(sat<12)&(mx>25); print('ink median',np.median(im[neutral],0), neutral.sum())
cop=(im[...,0]>150)&(im[...,0]-im[...,2]>70); print('copper median',np.median(im[cop],0))
red=(im[...,0]>150)&(im[...,1]<60); print('red median',np.median(im[red],0))
ink=np.median(im[neutral&(mx>30)],0); copper=np.median(im[cop],0); rd=np.median(im[red],0)
fgs=np.stack([ink,copper,rd])
P=im.reshape(-1,3)
# alpha for each candidate, residual
best=None
alphas=[];res=[]
for f in fgs:
    a=np.clip(P@f/(f@f),0,1); r=np.linalg.norm(P-a[:,None]*f,axis=1); alphas.append(a); res.append(r)
alphas=np.stack(alphas,1); res=np.stack(res,1)
idx=res.argmin(1); a=alphas[np.arange(len(P)),idx]
# noise floor
a=np.clip((a-0.12)/0.88,0,1)

def out(name,colors):
    C=np.array(colors,float)[idx]
    rgba=np.concatenate([C,(a*255)[:,None]],1).reshape(H,W,4).astype(np.uint8)
    img=Image.fromarray(rgba,'RGBA')
    bb=img.getbbox(); print(name,bb)
    img=img.crop((bb[0]-20,bb[1]-20,bb[2]+20,bb[3]+20)); img.save(name,optimize=True)
out('woodward-avenue/site/assets/logo/woodward-logo-dark.png',[(0x20,0x25,0x27),(0xB7,0x7A,0x46),(0xDC,0x01,0x0F)])
out('woodward-avenue/site/assets/logo/woodward-logo-light.png',[(0xF7,0xF3,0xE9),(0xB7,0x7A,0x46),(0xDC,0x01,0x0F)])
