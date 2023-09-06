<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Points extends Model
{
    use HasFactory;

    protected $table = 'users';

    protected $fillable = [
        'points_ch1',
        'points_ch2',
        'points_ch3',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
