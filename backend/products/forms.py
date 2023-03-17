from pydantic import BaseModel


class ProductForm(BaseModel):
    title: str
    description: str
    types: list[str]
    quantity: int
    price: int | float
    brand_id: int
