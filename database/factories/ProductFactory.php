<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Support\Str;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model =Product::class;
    public function definition()
    {
        $title = $this->faker->sentence(8);
        $slug = Str::slug($title);
        $number = rand(1,1000);


        return [
            'title' => $title,
            'slug' => $slug,
            'price' => rand(100, 300),
            'image' => 'https://placeimg.com/640/480/' . $number,
            'description' => $this->faker->text(100),
            'category_id'=>rand(1,5),
        ];
    }
}
