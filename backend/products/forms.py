from pydantic import BaseModel


class ProductForm(BaseModel):
    title: str
    description: str
    types: list[str]
    quantity: float
    price: int
    brand_id: int
